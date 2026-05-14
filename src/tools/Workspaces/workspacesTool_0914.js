/**
 * Generated Tool: workspacesTool_0914
 * Domain: Workspaces
 * ID: 0914
 */
exports.workspacesTool_0914 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0914:', error);
    throw error;
  }
};
