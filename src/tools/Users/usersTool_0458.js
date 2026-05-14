/**
 * Generated Tool: usersTool_0458
 * Domain: Users
 * ID: 0458
 */
exports.usersTool_0458 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0458:', error);
    throw error;
  }
};
