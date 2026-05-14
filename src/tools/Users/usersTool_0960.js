/**
 * Generated Tool: usersTool_0960
 * Domain: Users
 * ID: 0960
 */
exports.usersTool_0960 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0960:', error);
    throw error;
  }
};
