/**
 * Generated Tool: usersTool_0423
 * Domain: Users
 * ID: 0423
 */
exports.usersTool_0423 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0423:', error);
    throw error;
  }
};
