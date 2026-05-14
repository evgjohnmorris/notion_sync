/**
 * Generated Tool: workspacesTool_0769
 * Domain: Workspaces
 * ID: 0769
 */
exports.workspacesTool_0769 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0769:', error);
    throw error;
  }
};
