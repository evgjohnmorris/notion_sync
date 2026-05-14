/**
 * Generated Tool: usersTool_0641
 * Domain: Users
 * ID: 0641
 */
exports.usersTool_0641 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0641:', error);
    throw error;
  }
};
