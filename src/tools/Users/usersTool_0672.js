/**
 * Generated Tool: usersTool_0672
 * Domain: Users
 * ID: 0672
 */
exports.usersTool_0672 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0672:', error);
    throw error;
  }
};
