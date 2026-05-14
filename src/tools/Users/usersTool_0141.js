/**
 * Generated Tool: usersTool_0141
 * Domain: Users
 * ID: 0141
 */
exports.usersTool_0141 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0141:', error);
    throw error;
  }
};
