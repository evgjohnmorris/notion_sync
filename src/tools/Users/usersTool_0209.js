/**
 * Generated Tool: usersTool_0209
 * Domain: Users
 * ID: 0209
 */
exports.usersTool_0209 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0209:', error);
    throw error;
  }
};
