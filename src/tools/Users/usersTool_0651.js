/**
 * Generated Tool: usersTool_0651
 * Domain: Users
 * ID: 0651
 */
exports.usersTool_0651 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0651:', error);
    throw error;
  }
};
