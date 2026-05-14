/**
 * Generated Tool: usersTool_0240
 * Domain: Users
 * ID: 0240
 */
exports.usersTool_0240 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0240:', error);
    throw error;
  }
};
