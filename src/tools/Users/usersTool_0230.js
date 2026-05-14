/**
 * Generated Tool: usersTool_0230
 * Domain: Users
 * ID: 0230
 */
exports.usersTool_0230 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0230:', error);
    throw error;
  }
};
