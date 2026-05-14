/**
 * Generated Tool: usersTool_0451
 * Domain: Users
 * ID: 0451
 */
exports.usersTool_0451 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0451:', error);
    throw error;
  }
};
