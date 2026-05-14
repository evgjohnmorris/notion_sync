/**
 * Generated Tool: usersTool_0618
 * Domain: Users
 * ID: 0618
 */
exports.usersTool_0618 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0618:', error);
    throw error;
  }
};
