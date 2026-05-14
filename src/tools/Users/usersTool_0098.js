/**
 * Generated Tool: usersTool_0098
 * Domain: Users
 * ID: 0098
 */
exports.usersTool_0098 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0098:', error);
    throw error;
  }
};
