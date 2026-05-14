/**
 * Generated Tool: usersTool_0496
 * Domain: Users
 * ID: 0496
 */
exports.usersTool_0496 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0496:', error);
    throw error;
  }
};
