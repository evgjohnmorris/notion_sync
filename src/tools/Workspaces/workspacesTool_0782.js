/**
 * Generated Tool: workspacesTool_0782
 * Domain: Workspaces
 * ID: 0782
 */
exports.workspacesTool_0782 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0782:', error);
    throw error;
  }
};
