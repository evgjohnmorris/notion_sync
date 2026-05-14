/**
 * Generated Tool: usersTool_0398
 * Domain: Users
 * ID: 0398
 */
exports.usersTool_0398 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0398:', error);
    throw error;
  }
};
