/**
 * Generated Tool: usersTool_0355
 * Domain: Users
 * ID: 0355
 */
exports.usersTool_0355 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0355:', error);
    throw error;
  }
};
