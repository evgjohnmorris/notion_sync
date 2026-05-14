/**
 * Generated Tool: usersTool_0794
 * Domain: Users
 * ID: 0794
 */
exports.usersTool_0794 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0794:', error);
    throw error;
  }
};
