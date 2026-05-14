/**
 * Generated Tool: databasesTool_0205
 * Domain: Databases
 * ID: 0205
 */
exports.databasesTool_0205 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0205:', error);
    throw error;
  }
};
