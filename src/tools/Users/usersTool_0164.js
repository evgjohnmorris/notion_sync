/**
 * Generated Tool: usersTool_0164
 * Domain: Users
 * ID: 0164
 */
exports.usersTool_0164 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0164:', error);
    throw error;
  }
};
