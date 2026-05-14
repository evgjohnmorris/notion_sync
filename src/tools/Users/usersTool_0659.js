/**
 * Generated Tool: usersTool_0659
 * Domain: Users
 * ID: 0659
 */
exports.usersTool_0659 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0659:', error);
    throw error;
  }
};
