/**
 * Generated Tool: usersTool_0015
 * Domain: Users
 * ID: 0015
 */
exports.usersTool_0015 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0015:', error);
    throw error;
  }
};
