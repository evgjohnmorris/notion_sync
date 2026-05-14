/**
 * Generated Tool: usersTool_0601
 * Domain: Users
 * ID: 0601
 */
exports.usersTool_0601 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0601:', error);
    throw error;
  }
};
