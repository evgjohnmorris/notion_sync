/**
 * Generated Tool: usersTool_0637
 * Domain: Users
 * ID: 0637
 */
exports.usersTool_0637 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0637:', error);
    throw error;
  }
};
