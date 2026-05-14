/**
 * Generated Tool: usersTool_0571
 * Domain: Users
 * ID: 0571
 */
exports.usersTool_0571 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0571:', error);
    throw error;
  }
};
