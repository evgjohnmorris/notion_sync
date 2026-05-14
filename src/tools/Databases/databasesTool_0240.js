/**
 * Generated Tool: databasesTool_0240
 * Domain: Databases
 * ID: 0240
 */
exports.databasesTool_0240 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0240:', error);
    throw error;
  }
};
