/**
 * Generated Tool: databasesTool_0743
 * Domain: Databases
 * ID: 0743
 */
exports.databasesTool_0743 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0743:', error);
    throw error;
  }
};
