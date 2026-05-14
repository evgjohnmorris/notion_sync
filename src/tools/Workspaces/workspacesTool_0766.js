/**
 * Generated Tool: workspacesTool_0766
 * Domain: Workspaces
 * ID: 0766
 */
exports.workspacesTool_0766 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0766:', error);
    throw error;
  }
};
