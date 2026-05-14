/**
 * Generated Tool: usersTool_0967
 * Domain: Users
 * ID: 0967
 */
exports.usersTool_0967 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0967:', error);
    throw error;
  }
};
