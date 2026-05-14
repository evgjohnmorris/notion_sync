/**
 * Generated Tool: usersTool_0472
 * Domain: Users
 * ID: 0472
 */
exports.usersTool_0472 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0472:', error);
    throw error;
  }
};
