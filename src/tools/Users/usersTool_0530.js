/**
 * Generated Tool: usersTool_0530
 * Domain: Users
 * ID: 0530
 */
exports.usersTool_0530 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0530:', error);
    throw error;
  }
};
