/**
 * Generated Tool: databasesTool_0363
 * Domain: Databases
 * ID: 0363
 */
exports.databasesTool_0363 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0363:', error);
    throw error;
  }
};
