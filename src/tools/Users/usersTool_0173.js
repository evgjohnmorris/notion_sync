/**
 * Generated Tool: usersTool_0173
 * Domain: Users
 * ID: 0173
 */
exports.usersTool_0173 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0173:', error);
    throw error;
  }
};
