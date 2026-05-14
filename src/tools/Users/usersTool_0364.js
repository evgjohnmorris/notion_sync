/**
 * Generated Tool: usersTool_0364
 * Domain: Users
 * ID: 0364
 */
exports.usersTool_0364 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0364:', error);
    throw error;
  }
};
