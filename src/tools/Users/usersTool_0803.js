/**
 * Generated Tool: usersTool_0803
 * Domain: Users
 * ID: 0803
 */
exports.usersTool_0803 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0803:', error);
    throw error;
  }
};
