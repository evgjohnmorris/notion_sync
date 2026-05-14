/**
 * Generated Tool: databasesTool_0285
 * Domain: Databases
 * ID: 0285
 */
exports.databasesTool_0285 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0285:', error);
    throw error;
  }
};
