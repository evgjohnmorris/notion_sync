/**
 * Generated Tool: usersTool_0939
 * Domain: Users
 * ID: 0939
 */
exports.usersTool_0939 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0939:', error);
    throw error;
  }
};
