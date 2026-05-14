/**
 * Generated Tool: usersTool_0488
 * Domain: Users
 * ID: 0488
 */
exports.usersTool_0488 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0488:', error);
    throw error;
  }
};
