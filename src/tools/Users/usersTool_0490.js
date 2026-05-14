/**
 * Generated Tool: usersTool_0490
 * Domain: Users
 * ID: 0490
 */
exports.usersTool_0490 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0490:', error);
    throw error;
  }
};
