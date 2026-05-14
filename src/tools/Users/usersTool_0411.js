/**
 * Generated Tool: usersTool_0411
 * Domain: Users
 * ID: 0411
 */
exports.usersTool_0411 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0411:', error);
    throw error;
  }
};
