/**
 * Generated Tool: usersTool_0467
 * Domain: Users
 * ID: 0467
 */
exports.usersTool_0467 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0467:', error);
    throw error;
  }
};
