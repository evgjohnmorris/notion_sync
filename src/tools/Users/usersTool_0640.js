/**
 * Generated Tool: usersTool_0640
 * Domain: Users
 * ID: 0640
 */
exports.usersTool_0640 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0640:', error);
    throw error;
  }
};
