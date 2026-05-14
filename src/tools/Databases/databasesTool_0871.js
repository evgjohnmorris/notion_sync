/**
 * Generated Tool: databasesTool_0871
 * Domain: Databases
 * ID: 0871
 */
exports.databasesTool_0871 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0871:', error);
    throw error;
  }
};
