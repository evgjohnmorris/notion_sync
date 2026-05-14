/**
 * Generated Tool: usersTool_0873
 * Domain: Users
 * ID: 0873
 */
exports.usersTool_0873 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0873:', error);
    throw error;
  }
};
