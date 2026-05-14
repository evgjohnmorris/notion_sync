/**
 * Generated Tool: usersTool_0484
 * Domain: Users
 * ID: 0484
 */
exports.usersTool_0484 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0484:', error);
    throw error;
  }
};
