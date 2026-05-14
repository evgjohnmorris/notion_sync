/**
 * Generated Tool: usersTool_0547
 * Domain: Users
 * ID: 0547
 */
exports.usersTool_0547 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0547:', error);
    throw error;
  }
};
