/**
 * Generated Tool: usersTool_0493
 * Domain: Users
 * ID: 0493
 */
exports.usersTool_0493 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0493:', error);
    throw error;
  }
};
