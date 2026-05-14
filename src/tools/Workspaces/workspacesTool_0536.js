/**
 * Generated Tool: workspacesTool_0536
 * Domain: Workspaces
 * ID: 0536
 */
exports.workspacesTool_0536 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0536:', error);
    throw error;
  }
};
