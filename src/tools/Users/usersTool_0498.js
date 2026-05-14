/**
 * Generated Tool: usersTool_0498
 * Domain: Users
 * ID: 0498
 */
exports.usersTool_0498 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0498:', error);
    throw error;
  }
};
