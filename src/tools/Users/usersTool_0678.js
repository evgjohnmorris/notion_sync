/**
 * Generated Tool: usersTool_0678
 * Domain: Users
 * ID: 0678
 */
exports.usersTool_0678 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0678:', error);
    throw error;
  }
};
