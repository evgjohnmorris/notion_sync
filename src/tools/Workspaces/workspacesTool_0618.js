/**
 * Generated Tool: workspacesTool_0618
 * Domain: Workspaces
 * ID: 0618
 */
exports.workspacesTool_0618 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0618:', error);
    throw error;
  }
};
