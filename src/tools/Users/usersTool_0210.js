/**
 * Generated Tool: usersTool_0210
 * Domain: Users
 * ID: 0210
 */
exports.usersTool_0210 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0210:', error);
    throw error;
  }
};
